import request from '../utils/request';

export function fetch({search}) {
  return request(`/api/dash/statistics`,{
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({search}),
  });
}


