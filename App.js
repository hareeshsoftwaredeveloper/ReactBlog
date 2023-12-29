const heading=React.createElement("h1", {id: "heading"}, "Hello World from React")
// That object is used to give attributes like id, class, etc...
const root=ReactDOM.createRoot(document.getElementById("root"))

 // Converts heading object into h1 tag 

console.log(heading) // Returns an object

    /*** 
     <div>
        <div>
          <h1>Hello World!</h1>

        </div>
      </div>
    **/

const parent = React.createElement(
    "div", { id: "parent" }, React.createElement("div", { id: "child" }, React.createElement("h1", {}, "Hello World!"))
)

// If you want to give two childrens then give array of children) 
// [ React.createElement("h1", {}, "First tag"),  React.createElement("h2", {}, "second tag")]



console.log(parent)

const parent2=React.createElement("div", {id: "parent"}, [React.createElement("div", {id: "child1"}, [React.createElement("h1", {}, "h1 Tag in child1"), React.createElement("h2", {}, "h2 Tag in child1")]), React.createElement("div", {id: "child2"}, [React.createElement("h1", {}, "h1 Tag in child2"), React.createElement("h2", {}, "h2 Tag in child2")])])
root.render(parent2)

// To reduce complexity we use JSX . It makes our life easy.


