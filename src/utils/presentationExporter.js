import pptxgen from 'pptxgenjs';
import { jsPDF } from 'jspdf';

const SLIDE_COLORS = {
  background: '#111827',
  title: '#60A5FA',
  text: '#D1D5DB',
  bullet: '#A855F7',
};

async function getImageAsBase64(url) {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Keep the full data URL including the header
        resolve(reader.result);
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch (error) {
    console.error('Error fetching image:', error);
    throw error;
  }
}

export const exportToPowerPoint = async (template) => {
  try {
    const pres = new pptxgen();
    
    pres.layout = 'LAYOUT_16x9';
    pres.author = 'PitchPro';

    for (const slideData of template.slides) {
      const slide = pres.addSlide();
      
      slide.background = { 
        color: SLIDE_COLORS.background
      };

      if (slideData.type === 'title') {
        try {
          const imageData = await getImageAsBase64(slideData.image);
          
          // For PowerPoint, we need to remove the data URL header
          const base64Data = imageData.split(',')[1];

          slide.addImage({
            data: base64Data,
            x: 0,
            y: 0,
            w: '100%',
            h: '100%',
            sizing: { type: 'cover' }
          });

          slide.addShape(pres.ShapeType.RECTANGLE, {
            x: 0,
            y: 0,
            w: '100%',
            h: '100%',
            fill: { color: '000000', transparency: 50 }
          });

          slide.addText(slideData.title, {
            x: '10%',
            y: '35%',
            w: '80%',
            h: '15%',
            fontSize: 54,
            fontFace: 'Arial',
            color: 'FFFFFF',
            bold: true,
            align: 'center'
          });

          if (slideData.subtitle) {
            slide.addText(slideData.subtitle, {
              x: '10%',
              y: '55%',
              w: '80%',
              h: '10%',
              fontSize: 32,
              fontFace: 'Arial',
              color: 'FFFFFF',
              align: 'center'
            });
          }
        } catch (imageError) {
          console.error('Error processing image for slide:', imageError);
          slide.addText(slideData.title, {
            x: '10%',
            y: '35%',
            w: '80%',
            h: '15%',
            fontSize: 54,
            fontFace: 'Arial',
            color: SLIDE_COLORS.title,
            bold: true,
            align: 'center'
          });

          if (slideData.subtitle) {
            slide.addText(slideData.subtitle, {
              x: '10%',
              y: '55%',
              w: '80%',
              h: '10%',
              fontSize: 32,
              fontFace: 'Arial',
              color: SLIDE_COLORS.text,
              align: 'center'
            });
          }
        }
      } else {
        slide.addText(slideData.title, {
          x: '5%',
          y: '5%',
          w: '90%',
          h: '15%',
          fontSize: 44,
          fontFace: 'Arial',
          color: SLIDE_COLORS.title,
          bold: true,
          align: 'left',
          valign: 'middle'
        });

        const contentStartY = 25;
        const lineHeight = 7;

        slideData.content.forEach((item, index) => {
          const parts = item.split('\n');
          let currentY = contentStartY + (index * lineHeight);

          parts.forEach((part) => {
            const text = part.trim();
            
            slide.addText(text, {
              x: '10%',
              y: `${currentY}%`,
              w: '80%',
              h: '5%',
              fontSize: 24,
              fontFace: 'Arial',
              color: SLIDE_COLORS.text,
              bullet: {
                type: 'bullet',
                color: SLIDE_COLORS.bullet
              },
              lineSpacing: 1.5,
              align: 'left',
              breakLine: true
            });

            currentY += lineHeight - 2;
          });
        });
      }
    }

    await pres.writeFile({ fileName: `${template.title.replace(/\s+/g, '-')}.pptx` });
    return true;
  } catch (error) {
    console.error('Error generating PowerPoint:', error);
    return false;
  }
};

export const exportToPDF = async (template) => {
  try {
    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: 'a4',
    });

    for (let slideIndex = 0; slideIndex < template.slides.length; slideIndex++) {
      if (slideIndex > 0) {
        pdf.addPage();
      }

      const slideData = template.slides[slideIndex];
      const width = pdf.internal.pageSize.width;
      const height = pdf.internal.pageSize.height;
      
      if (slideData.type === 'title') {
        try {
          // Add background color first
          pdf.setFillColor(17, 24, 39);
          pdf.rect(0, 0, width, height, 'F');

          // Add image with overlay
          const imageData = await getImageAsBase64(slideData.image);
          
          // For PDF, we can use the full data URL
          pdf.addImage(
            imageData,
            'JPEG',
            0,
            0,
            width,
            height,
            undefined,
            'FAST'
          );

          // Add semi-transparent overlay
          pdf.setFillColor(0, 0, 0);
          pdf.setGState(new pdf.GState({ opacity: 0.5 }));
          pdf.rect(0, 0, width, height, 'F');
          pdf.setGState(new pdf.GState({ opacity: 1 }));

          // Add title
          pdf.setTextColor(255, 255, 255);
          pdf.setFontSize(48);
          pdf.setFont('helvetica', 'bold');
          
          const titleLines = pdf.splitTextToSize(slideData.title, width * 0.8);
          const titleHeight = (titleLines.length * 48) / pdf.internal.scaleFactor;
          const titleY = (height - titleHeight) / 2;
          
          titleLines.forEach((line, i) => {
            const titleWidth = pdf.getStringUnitWidth(line) * 48 / pdf.internal.scaleFactor;
            const titleX = (width - titleWidth) / 2;
            pdf.text(line, titleX, titleY + (i * 15));
          });

          // Add subtitle if present
          if (slideData.subtitle) {
            pdf.setTextColor(200, 200, 200);
            pdf.setFontSize(24);
            pdf.setFont('helvetica', 'normal');
            
            const subtitleLines = pdf.splitTextToSize(slideData.subtitle, width * 0.8);
            subtitleLines.forEach((line, i) => {
              const subtitleWidth = pdf.getStringUnitWidth(line) * 24 / pdf.internal.scaleFactor;
              const subtitleX = (width - subtitleWidth) / 2;
              pdf.text(line, subtitleX, titleY + titleHeight + 10 + (i * 8));
            });
          }
        } catch (imageError) {
          console.error('Error processing image for PDF:', imageError);
          // Fallback to text-only title slide
          pdf.setFillColor(17, 24, 39);
          pdf.rect(0, 0, width, height, 'F');
          
          pdf.setTextColor(255, 255, 255);
          pdf.setFontSize(48);
          pdf.setFont('helvetica', 'bold');
          const titleWidth = pdf.getStringUnitWidth(slideData.title) * 48 / pdf.internal.scaleFactor;
          const titleX = (width - titleWidth) / 2;
          pdf.text(slideData.title, titleX, height / 2);

          if (slideData.subtitle) {
            pdf.setTextColor(200, 200, 200);
            pdf.setFontSize(24);
            pdf.setFont('helvetica', 'normal');
            const subtitleWidth = pdf.getStringUnitWidth(slideData.subtitle) * 24 / pdf.internal.scaleFactor;
            const subtitleX = (width - subtitleWidth) / 2;
            pdf.text(slideData.subtitle, subtitleX, height / 2 + 15);
          }
        }
      } else {
        // Content slide
        pdf.setFillColor(17, 24, 39);
        pdf.rect(0, 0, width, height, 'F');

        // Title
        pdf.setTextColor(96, 165, 250);
        pdf.setFontSize(28);
        pdf.setFont('helvetica', 'bold');
        pdf.text(slideData.title, 20, 30);

        // Content
        pdf.setTextColor(209, 213, 219);
        pdf.setFont('helvetica', 'normal');
        let yPosition = 50;
        
        slideData.content.forEach((item) => {
          const lines = pdf.splitTextToSize(item, width - 50);
          
          lines.forEach((line, i) => {
            if (i === 0) {
              pdf.setFillColor(168, 85, 247);
              pdf.circle(20, yPosition - 1, 0.8, 'F');
            }
            pdf.setFontSize(14);
            pdf.text(line, i === 0 ? 25 : 25, yPosition);
            yPosition += 8;
          });
          
          yPosition += 4; // Add space between bullet points
        });
      }
    }

    pdf.save(`${template.title.replace(/\s+/g, '-')}.pdf`);
    return true;
  } catch (error) {
    console.error('Error generating PDF:', error);
    return false;
  }
};