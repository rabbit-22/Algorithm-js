function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  const trucks = truck_weights.slice();
  const bridge = [];
  let bridge_weight = 0;

  while (true) {
    time++;

    if (bridge.length > 0 && time === bridge[0][1] + bridge_length) {
      const [out_truck, in_time] = bridge.shift();
      bridge_weight -= out_truck;
    }

    if (
      trucks.length > 0 &&
      bridge_length >= bridge.length + 1 &&
      weight >= bridge_weight + trucks[0]
    ) {
      const in_truck = trucks.shift();
      bridge.push([in_truck, time]);
      bridge_weight += in_truck;
    }

    if (!(trucks.length || bridge.length)) {
      break;
    }
  }

  return time;
}
