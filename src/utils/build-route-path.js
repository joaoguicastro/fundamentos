export function buildRoutePath(path){
    const routeParamtersRegex = /:([a-zA-Z]+)/g

    console.log(Array.from(path.matchAll(routeParamtersRegex)))
}