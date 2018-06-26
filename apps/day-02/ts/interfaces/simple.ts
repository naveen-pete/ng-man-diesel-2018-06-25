interface RectangleOptions {
  length: number;
  width: number;
}

// This function draws a 2D rectangle
function drawRectangle(options: RectangleOptions) {
  const l = options.length;
  const w = options.width;

  console.log('rectangle length:', l);
  console.log('rectangle width:', w);
}

const options = {
  length: 10,
  width: 20
};

drawRectangle(options);

const customer = {
  name: 'hari',
  phone: '9886098860',
  length: 20,
  width: 30
};

drawRectangle(customer);
