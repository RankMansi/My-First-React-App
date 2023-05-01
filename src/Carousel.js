// import React, {useState, useEffect} from "react"

//     export default function Carousel() {
//         const [count, setCount] = useState(0)
//         const gallery = ['https://images.unsplash.com/photo-1526315337991-2ea805e212a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80','https://images.unsplash.com/photo-1533087053677-60bb97f0b3bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80']
//         const currentImg = count
//         return (
//             <div>
//                 <img src={currentImg} alt="slide" />
//             </div>
//         )
//     }
//     const callback = () => {
//         setCount(count + 1)
//         if (previousCount > gallery.length - 2)
//         setCount(0)
//     }

//     function useInterval(callback) {
//         useEffect(() =>
//         {
//             let timer = setInterval(callback, 1000)
//             return () => clearInterval(timer)
//         }
//         )
//     }

//     useInterval(callback)
//     function useInterval(callback) {
//     const savedCallback = useRef()

//     useEffect(() => {
//         savedCallback.current = callback
//     })
//     function useInterval(callback) {
//         const savedCallback = useRef()

//         useEffect(() => {
//             savedCallback.current = callback
//         })

//         function tick() {
//             savedCallback.current();
//         }

//         let timer = setInterval(tick)
//         return () => clearInterval(timer)
//     }
//     const [isRunning, setIsRunning] = useState(true)

//     function useInterval(callback, delay) {
//         const savedCallback = useRef()

//         useEffect(() => {
//         savedCallback.current = callback
//         })

//         useEffect(() => {
//             function tick() {
//                 savedCallback.current();
//             }
//             if (delay !== null) {
//                 let timer = setInterval(tick, delay)
//                 return () => clearInterval(timer)
//             }
//         }, [delay])
//     }

//     useInterval(callback, isRunning ? 5000 : null)
// }
