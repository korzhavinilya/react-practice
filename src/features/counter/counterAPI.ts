// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise<{ data: number }>((resolve, reject) =>
    setTimeout(() => {
      return resolve({ data: amount });
      // return reject(new Error('some error'));
    }, 500)
  );
}
