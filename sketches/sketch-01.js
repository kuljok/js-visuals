const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 2048, 2048 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'blue';
    context.fillRect(0, 0, width, height);

    const width = 60;
    const height = 60;
    const gap = 20;
    let x, y;

    for (let i = 0; i < 5; i++)
    {
        for(let j = 0; j < 5; j++)
        {
            x = 100 + (width + gap) * i;
            y = 100 + (height + gap) * j;

            context.beginPath();
            context.rect(x, y, width, height);
            context.stroke();

            if (Math.random() > 0.5)
            {
                context.beginPath();
                context.rect(x + 8, y + 8, width - 16, height - 16);
                context.stroke();
            }
        }
    }

  };
};

canvasSketch(sketch, settings);
