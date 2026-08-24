// implements clauses

interface Pingable {
  ping(): void;
}

class Sonar implements Pingable {
  ping(): void {
    console.log("ping!");
  }
}

class Ball implements Pingable {
  pong(): void {
    console.log("pong..");
  }
}
