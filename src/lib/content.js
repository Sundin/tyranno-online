export function localDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function partitionEvents(events, today = new Date()) {
  const todayKey = localDateKey(today);
  return {
    upcoming: events.filter(({ date }) => date >= todayKey).toSorted((a, b) => a.date.localeCompare(b.date)),
    past: events.filter(({ date }) => date < todayKey).toSorted((a, b) => b.date.localeCompare(a.date)),
  };
}

export function publishedEntries(entries, today = new Date()) {
  const todayKey = localDateKey(today);
  return entries.filter(({ date }) => date <= todayKey).toSorted((a, b) => b.date.localeCompare(a.date));
}

export function paginate(items, page, pageSize) {
  const pageCount = Math.max(1, Math.ceil(items.length / pageSize));
  const safePage = Math.min(Math.max(page, 0), pageCount - 1);
  return {
    items: items.slice(safePage * pageSize, (safePage + 1) * pageSize),
    page: safePage,
    pageCount,
  };
}
