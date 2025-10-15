import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export async function GET() {
  try {
    const contentPath = path.join(process.cwd(), 'content', 'experience.yaml');
    const fileContents = fs.readFileSync(contentPath, 'utf8');
    const data = yaml.load(fileContents);

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to load experience data' }, { status: 500 });
  }
}
