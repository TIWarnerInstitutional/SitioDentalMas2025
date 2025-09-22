// Quick test harness for horario parser
import sucursales from '../data/sucursales';

function parseTimeToMinutes(t: string) {
  const [h, m] = t.split(":").map(x => parseInt(x, 10));
  if (Number.isNaN(h)) return null;
  return (h * 60) + (Number.isNaN(m) ? 0 : m);
}

const dayMap: Record<string, number> = {
  lun: 1, mar: 2, mie: 3, 'mié': 3, jue: 4, vie: 5, sab: 6, 'sáb': 6, dom: 0
};

function parseDaysPart(part: string): number[] {
  part = part.trim();
  const rangeMatch = part.match(/([A-Za-záéíóúñ]+)\s*-\s*([A-Za-záéíóúñ]+)/i);
  if (rangeMatch) {
    const a = rangeMatch[1].toLowerCase().slice(0,3);
    const b = rangeMatch[2].toLowerCase().slice(0,3);
    const start = dayMap[a] ?? 0;
    const end = dayMap[b] ?? 0;
    const days: number[] = [];
    let d = start;
    while (true) {
      days.push(d);
      if (d === end) break;
      d = (d + 1) % 7;
    }
    return days;
  }
  const key = part.toLowerCase().slice(0,3);
  if (dayMap[key] !== undefined) return [dayMap[key]];
  return [];
}

function parseHorario(horario?: string) {
  if (!horario || typeof horario !== 'string') return [];
  const parts = horario.split(',').map(p => p.trim()).filter(Boolean);
  const schedule: Array<{ days: number[]; ranges: Array<{start: number; end: number}> }> = [];
  for (const p of parts) {
    const colonIndex = p.indexOf(':');
    if (colonIndex === -1) continue;
    const daysPartRaw = p.slice(0, colonIndex).trim();
    const timesRaw = p.slice(colonIndex + 1).trim();
    if (!daysPartRaw || !timesRaw) continue;
    const days = parseDaysPart(daysPartRaw);
    const ranges = timesRaw.split(/\s*(?:y|and|&|,)\s*/i).map(r => r.trim()).filter(Boolean).map(r => {
      const [s, e] = r.split('-').map(x => x && x.trim());
      const start = parseTimeToMinutes(s || '0:00');
      const end = parseTimeToMinutes(e || '0:00');
      return (start !== null && end !== null) ? { start, end } : null;
    }).filter(Boolean) as Array<{start: number; end: number}>;
    if (days.length && ranges.length) schedule.push({ days, ranges });
  }
  return schedule;
}

for (const s of sucursales as any[]) {
  console.log(s.nombre);
  console.log('  horario raw:', s.horario);
  console.log('  parsed:', JSON.stringify(parseHorario(s.horario)));
}
