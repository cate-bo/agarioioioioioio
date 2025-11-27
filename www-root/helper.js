class Circle
{
    id;
    position;
    size;

    constructor(position, size, id)
    {
        this.position = position;
        this.size = size;
        this.id = id;
    }
}

class Point
{
    id;
    position;

    constructor(position, id)
    {
        this.position = position;
        this.id = id;
    }
}

class Direction
{
    lengthx;
    lengthy;

    constructor(lengthx, lengthy)
    {
        this.lengthx = lengthx;
        this.lengthy = lengthy;
    }
}

class Position
{
    x;
    y;

    constructor(x, y)
    {
        this.x = x;
        this.y = y;
    }
}

module.exports = {
    Position,
    Point,
    Circle,
    Direction
}