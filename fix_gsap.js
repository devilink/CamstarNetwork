const fs = require('fs');
const path = require('path');

const dir = path.join(process.cwd(), 'src/components/v5');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(f => {
  let content = fs.readFileSync(path.join(dir, f), 'utf-8');
  if (content.includes('scrollTrigger:') || content.includes('ScrollTrigger')) {
    if (!content.includes('gsap/ScrollTrigger')) {
      content = content.replace('import gsap from "gsap";', 'import gsap from "gsap";\nimport { ScrollTrigger } from "gsap/ScrollTrigger";');
    }
    if (!content.includes('gsap.registerPlugin')) {
      content = content.replace('import { ScrollTrigger } from "gsap/ScrollTrigger";', 'import { ScrollTrigger } from "gsap/ScrollTrigger";\n\ngsap.registerPlugin(useGSAP, ScrollTrigger);');
    }
    fs.writeFileSync(path.join(dir, f), content);
    console.log(`Fixed ${f}`);
  }
});
