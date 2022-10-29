const fac = n => n > 1 ? BigInt(n) * fac(n - 1) : BigInt(n);

function solution(balls, share) {
    if(balls === share) return 1;

    return fac(balls) / (fac(balls - share) * fac(share));
}