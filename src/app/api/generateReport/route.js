import puppeteer from 'puppeteer';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req, res) {
  try {
    // Puppeteer options for Edge or Vercel environments
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();

    // Build the URL dynamically using NextRequest
    const reportUrl = `${req.nextUrl.origin}/report`; // `req.nextUrl.origin` provides the origin dynamically
    await page.goto(reportUrl, {
      waitUntil: 'networkidle2',
    });

    // Get current date and time for naming the PDF
    const today = new Date();
    const formattedDateTime = today.toISOString().replace('T', ' ').replace('Z', '');

    // Set the viewport for the page
    await page.setViewport({ width: 1920, height: 1080 });

    // Generate the PDF as a buffer
    const pdfBuffer = await page.pdf({
      printBackground: true,
      format: 'A4',
    });

    await browser.close();

    // Build headers using NextResponse
    const response = new NextResponse(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `inline; filename="Placement Cell Report ${formattedDateTime}.pdf"`,
      },
    });

    // Return the PDF as a response
    return response;
  } catch (error) {
    console.error('Error generating PDF:', error);
    return new NextResponse(JSON.stringify({ error: 'Failed to generate PDF' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
