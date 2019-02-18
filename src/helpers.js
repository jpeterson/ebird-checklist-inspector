import { get, all } from 'axios';
import { parse } from 'papaparse';

export async function getChecklistStatuses(ids) {
  const responses = await all(ids.map(id => getRequest(id)));
  const data = responses.map(response => {
    return response.data;
  });

  return data;
}

function getRequest(id) {
  return get(`https://ebird.org/ws2.0/product/checklist/view/${id}`, {
    headers: { 'X-eBirdApiToken': '1c0o6rrot2dr' }
  });
}

export function parseCsv(file) {
  return new Promise((resolve, reject) => {
    parse(file, {
      header: true,
      complete: results => {
        resolve(results.data);
      }
    });
  });
}
