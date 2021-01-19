function rectangles(input) {

    let result = input
        .map(([width, height]) => ({
            width,
            height,
            area: () => width * height,
            compareTo(rect) {
                let compare = rect.area() - this.area();

                return compare == 0 
                    ? rect.width - this.width 
                    : compare
            }
        }))
        .sort((a, b) => a.compareTo(b));

    return result;
}
console.log(rectangles([
    [10, 5],
    [5, 12]
]))