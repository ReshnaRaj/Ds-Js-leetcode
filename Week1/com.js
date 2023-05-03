function logAtMost5(n) {
    for (var i = 1; i <= Math.min(6, n); i++) {
      console.log(i);
    }
  }
  logAtMost5(6)