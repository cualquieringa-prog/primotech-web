import { EXPERIENCE_START_DATE } from "@/lib/config";

const [START_YEAR, START_MONTH, START_DAY] = EXPERIENCE_START_DATE.split("-").map(Number);

export function getExperienceYears(now: Date = new Date()): number {
  const month = now.getMonth() + 1;
  const anniversaryPassed = month > START_MONTH || (month === START_MONTH && now.getDate() >= START_DAY);
  return Math.max(0, now.getFullYear() - START_YEAR - (anniversaryPassed ? 0 : 1));
}

// Mismo cálculo en JS plano. Corre apenas el navegador lee el HTML (antes de que React cargue y antes del primer dibujo), así el número nunca se ve desactualizado.
export function experienceYearsInlineScript(): string {
  return `(function(){var n=new Date(),y=n.getFullYear()-${START_YEAR},m=n.getMonth()+1;if(m<${START_MONTH}||(m===${START_MONTH}&&n.getDate()<${START_DAY}))y--;y=Math.max(0,y);var e=document.querySelectorAll("[data-years]");for(var i=0;i<e.length;i++)e[i].textContent=String(y)})()`;
}
