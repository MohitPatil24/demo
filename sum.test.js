import sum from "./sum.js";

test("adds 2 + 2 to equal 4",()=>{
    expect(sum(2,3)).toBe(4);
})