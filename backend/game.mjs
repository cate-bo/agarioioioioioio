import {Position, Point, Circle, Direction} from '../www-root/helper.js';

const play_area_size = 10_000;
const base_speed = 10;
const slow_down_factor = 0.001;
const point_spawnrate = 10;
const min_spawn_distance_from_center = 3_000;
const max_spawn_distance_from_center = 5_500;
const start_size = 10;

function start()
{

    setInterval(game_update, 1000)
}

function game_update()
{

}

function move_circle(circle, direction)
{
    let desired_position = new Position(
        circle.position.x + (direction.x * (base_speed - slow_down_factor * circle.size)),
        circle.position.y + (direction.y * (base_speed - slow_down_factor * circle.size)),
    )

    //keep inbounds
    if (desired_position.x < 0) {
        desired_position.x = 0;
    } else if (desired_position.x > play_area_size) {
        desired_position.x = play_area_size;
    }

    if (desired_position.y < 0) {
        desired_position.y = 0;
    } else if (desired_position.y > play_area_size) {
        desired_position.y = play_area_size;
    }

    circle.position = desired_position;
}

function spawn_circle(id)
{
    let x = Math.random() * (max_spawn_distance_from_center - min_spawn_distance_from_center) + min_spawn_distance_from_center;
    let y = Math.random() * (max_spawn_distance_from_center - min_spawn_distance_from_center) + min_spawn_distance_from_center;
    return new Circle(new Position(x,y), start_size, id, new Direction(0,0));
}

