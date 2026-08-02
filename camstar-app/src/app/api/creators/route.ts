import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';
import * as xlsx from 'xlsx';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'influ.xlsx');
    
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: 'Excel file not found' }, { status: 404 });
    }

    const fileBuffer = fs.readFileSync(filePath);
    const workbook = xlsx.read(fileBuffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    
    // Parse to JSON using the first row as headers
    const rawData = xlsx.utils.sheet_to_json(sheet) as any[];

    // Helper to parse '1.3M', '100K', etc into numbers
    const parseFollowers = (val: string | number | undefined) => {
      if (!val) return 0;
      if (typeof val === 'number') return val;
      
      let parsed = val.toString().toUpperCase().replace(/,/g, '').replace(/\+/g, '').trim();
      
      if (parsed.endsWith('M')) {
        return parseFloat(parsed) * 1000000;
      }
      if (parsed.endsWith('K')) {
        return parseFloat(parsed) * 1000;
      }
      return parseFloat(parsed) || 0;
    };

    // Transform raw Excel data into our Creator interface
    // Filter out empty rows or the 'TOTAL' summary row at the bottom
    const validData = rawData.filter(row => {
      const sno = row['S.No']?.toString().toUpperCase();
      return sno && sno !== 'TOTAL' && row['Name'];
    });

    const creators = validData.map((row, index) => {
      // Map columns based on our inspection
      const id = row['S.No']?.toString() || index.toString();
      const name = row['Name']?.toString() || 'Unknown Creator';
      const state = row['Location']?.toString() || 'Unknown State';
      const category = row['Category']?.toString() || 'General';
      
      const instagramLink = row['Instagram Link']?.toString();
      const instaFollowers = parseFollowers(row['Insta Followers']);
      
      const youtubeLink = row['YouTube Link']?.toString();
      const ytSubscribers = parseFollowers(row['YT Subscribers']);
      
      const facebookLink = row['Facebook Link']?.toString();
      const fbFollowers = parseFollowers(row['FB Followers']);

      const isVerified = row['Status']?.toString().toLowerCase() === 'active';

      return {
        id,
        name,
        state,
        category,
        languages: [], // Not present in current excel schema
        followers: {
          instagram: instaFollowers || undefined,
          youtube: ytSubscribers || undefined,
          facebook: fbFollowers || undefined,
        },
        socialLinks: {
          instagram: instagramLink || undefined,
          youtube: youtubeLink || undefined,
          facebook: facebookLink || undefined,
        },
        imageUrl: "/assets/lappy.jpg", // Placeholder until you have real images
        isVerified,
      };
    });

    return NextResponse.json(creators);
  } catch (error) {
    console.error('Error reading Excel file:', error);
    return NextResponse.json({ error: 'Failed to process creators data' }, { status: 500 });
  }
}
