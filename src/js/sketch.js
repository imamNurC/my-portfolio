const sketch = (p) => {
  let angle = Math.PI / 4; // Angle between branches

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight / 2); // Canvas size, half of the window height
    p.background(0); // Set background to black
    p.stroke(255); // Set stroke to white
    p.strokeWeight(2); // Set stroke weight
    p.noLoop(); // Run the sketch only once
    p.frameRate(30); // Set the frame rate
  };

  p.draw = () => {
    p.translate(p.width / 2, p.height); // Set origin to the bottom center
    p.branch(120); // Start the fractal tree with a branch length of 120
  };

  // Recursive function to draw branches
  p.branch = (len) => {
    if (len < 10) {
      return; // Stop recursion if branch is too small
    }

    // Draw the branch
    p.line(0, 0, 0, -len);
    p.translate(0, -len); // Move the origin to the end of the branch

    // Apply rotation and recursively draw two smaller branches
    p.push(); // Save the current state
    p.rotate(angle); // Rotate by angle to the right
    p.branch(len * 0.7); // Draw a smaller branch
    p.pop(); // Restore the previous state

    p.push(); // Save the current state
    p.rotate(-angle); // Rotate by angle to the left
    p.branch(len * 0.7); // Draw another smaller branch
    p.pop(); // Restore the previous state
  };
};

export default sketch;
