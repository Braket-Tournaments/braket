import styles from "../../styles/Home.module.css";

export default function Features() {
  return(
   <div className="flex flex-col h-[58rem] bg-inherit bg-zinc-900"> 
        <div className="text text-5xl ml-6 mt-2 text-right text-white mr-36">FEATURES</div>
            <svg
            className={styles.arrowSVG}
            viewBox="0 0 560 100"
            width="100%"
            height="100px"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMaxYMin meet"
            >
            <rect
            height="0.33333"
            width="560"
            y="20"
            x="0"
            stroke="#904E55"
            fill="#904E55"
            />
            <ellipse
            ry="5"
            rx="5"
            id="svg_4"
            cy="20"
            cx="0"
            stroke="#904E55"
            fill="#904E55"
            />
            </svg>

            <div className="h-2/5 w-3/5 flex flex-rows gap-r10 ml-20">
                <div className="h-full w-full bg-red-600">
                        <svg>
                            <rect height="0.33333"
                            width="560"
                            y="20"
                            x="0"
                            stroke="#904E55"
                            fill="#904E55"/>
                            <text x="0" y="50" fill="blue">Hello</text>
                        </svg>
                </div>
                <div className="h-full w-full bg-red-600">
                        <svg>
                            <rect height="0.33333"
                            width="560"
                            y="20"
                            x="0"
                            stroke="#904E55"
                            fill="#904E55"/>
                            <text x="0" y="50" fill="blue">Hello</text>
                        </svg>
                </div>
                <div className="h-full w-full bg-red-600">
                        <svg>
                            <rect height="0.33333"
                            width="560"
                            y="20"
                            x="0"
                            stroke="#904E55"
                            fill="#904E55"/>
                            <text x="0" y="50" fill="blue">Hello</text>
                        </svg>
                </div>
                <div className="h-full w-full bg-blue-600">
                    <g>
                        <svg>
                            <rect height="0.33333"
                            width="560"
                            y="20"
                            x="0"
                            stroke="#904E55"
                            fill="#904E55"/>
                            <text x="0" y="50" fill="blue">Hello</text>
                        </svg>
                    </g>
                </div>
            </div>
    </div>
  )  
};