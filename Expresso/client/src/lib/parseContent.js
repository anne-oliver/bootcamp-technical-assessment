export default function parseContent(values = {}) {

  const titleCase = (s = '') =>
    s.trim().toLowerCase().replace(/\b\w/g, c => c.toUpperCase());

  const toLines = (v) => {
    if (Array.isArray(v)) {
      
      //shorthand .filter(line => Boolean(line))
      return v.map(x => String(x).trim()).filter(Boolean);
    }
    if (typeof v !== 'string') {
      return [];
    }
    return v.split('\n').map(line => line.trim()).filter(Boolean);
  };

  return {
    name: titleCase(values.name || ''),
    image_url: values.image_url || '',
    ingredients: toLines(values.ingredients),
    steps: toLines(values.steps),
  };
}
