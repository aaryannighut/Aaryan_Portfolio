"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import { Download } from "lucide-react";

// Custom Tech Stack SVG components for pixel-perfect matching
const JavaIcon = () => (
  <svg viewBox="0 0 128 128" className="w-[20px] h-[20px] md:w-[39.3px] md:h-[39.3px]">
    <path fill="#0074BD" d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zm-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"/>
    <path fill="#EA2D2E" d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"/>
    <path fill="#0074BD" d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zm40.697 22.747c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z"/>
    <path fill="#EA2D2E" d="M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815C58.041 28.42 81.722 22.195 76.491 1.587z"/>
    <path fill="#0074BD" d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"/>
  </svg>
);

const NodeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[20px] h-[20px] md:w-[39.3px] md:h-[39.3px] text-[#339933] fill-current">
    <title>Node.js</title>
    <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0 l8.795-5.076 c0.082-0.047,0.134-0.238,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>
  </svg>
);

const MongoIcon = () => (
  <svg viewBox="0 0 128 128" className="w-[20px] h-[20px] md:w-[39.3px] md:h-[39.3px]">
    <path fillRule="evenodd" clipRule="evenodd" fill="#439934" d="M88.038 42.812c1.605 4.643 2.761 9.383 3.141 14.296.472 6.095.256 12.147-1.029 18.142-.035.165-.109.32-.164.48-.403.001-.814-.049-1.208.012-3.329.523-6.655 1.065-9.981 1.604-3.438.557-6.881 1.092-10.313 1.687-1.216.21-2.721-.041-3.212 1.641-.014.046-.154.054-.235.08l.166-10.051-.169-24.252 1.602-.275c2.62-.429 5.24-.864 7.862-1.281 3.129-.497 6.261-.98 9.392-1.465 1.381-.215 2.764-.412 4.148-.618z"/>
    <path fillRule="evenodd" clipRule="evenodd" fill="#45A538" d="M61.729 110.054c-1.69-1.453-3.439-2.842-5.059-4.37-8.717-8.222-15.093-17.899-18.233-29.566-.865-3.211-1.442-6.474-1.627-9.792-.13-2.322-.318-4.665-.154-6.975.437-6.144 1.325-12.229 3.127-18.147l.099-.138c.175.233.427.439.516.702 1.759 5.18 3.505 10.364 5.242 15.551 5.458 16.3 10.909 32.604 16.376 48.9.107.318.384.579.583.866l-.87 2.969z"/>
    <path fillRule="evenodd" clipRule="evenodd" fill="#46A037" d="M88.038 42.812c-1.384.206-2.768.403-4.149.616-3.131.485-6.263.968-9.392 1.465-2.622.417-5.242.852-7.862 1.281l-1.602.275-.012-1.045c-.053-.859-.144-1.717-.154-2.576-.069-5.478-.112-10.956-.18-16.434-.042-3.429-.105-6.857-.175-10.285-.043-2.13-.089-4.261-.185-6.388-.052-1.143-.236-2.28-.311-3.423-.042-.657.016-1.319.029-1.979.817 1.583 1.616 3.178 2.456 4.749 1.327 2.484 3.441 4.314 5.344 6.311 7.523 7.892 12.864 17.068 16.193 27.433z"/>
    <path fillRule="evenodd" clipRule="evenodd" fill="#409433" d="M65.036 80.753c.081-.026.222-.034.235-.08.491-1.682 1.996-1.431 3.212-1.641 3.432-.594 6.875-1.13 10.313-1.687 3.326-.539 6.652-1.081 9.981-1.604.394-.062.805-.011 1.208-.012-.622 2.22-1.112 4.488-1.901 6.647-.896 2.449-1.98 4.839-3.131 7.182a49.142 49.142 0 01-6.353 9.763c-1.919 2.308-4.058 4.441-6.202 6.548-1.185 1.165-2.582 2.114-3.882 3.161l-.337-.23-1.214-1.038-1.256-2.753a41.402 41.402 0 01-1.394-9.838l.023-.561.171-2.426c.057-.828.133-1.655.168-2.485.129-2.982.241-5.964.359-8.946z"/>
    <path fillRule="evenodd" clipRule="evenodd" fill="#4FAA41" d="M65.036 80.753c-.118 2.982-.23 5.964-.357 8.947-.035.83-.111 1.657-.168 2.485l-.765.289c-1.699-5.002-3.399-9.951-5.062-14.913-2.75-8.209-5.467-16.431-8.213-24.642a4498.887 4498.887 0 00-6.7-19.867c-.105-.31-.407-.552-.617-.826l4.896-9.002c.168.292.39.565.496.879a6167.476 6167.476 0 016.768 20.118c2.916 8.73 5.814 17.467 8.728 26.198.116.349.308.671.491 1.062l.67-.78-.167 10.052z"/>
    <path fillRule="evenodd" clipRule="evenodd" fill="#4AA73C" d="M43.155 32.227c.21.274.511.516.617.826a4498.887 4498.887 0 016.7 19.867c2.746 8.211 5.463 16.433 8.213 24.642 1.662 4.961 3.362 9.911 5.062 14.913l.765-.289-.171 2.426-.155.559c-.266 2.656-.49 5.318-.814 7.968-.163 1.328-.509 2.632-.772 3.947-.198-.287-.476-.548-.583-.866-5.467-16.297-10.918-32.6-16.376-48.9a3888.972 3888.972 0 00-5.242-15.551c-.089-.263-.34-.469-.516-.702l3.272-8.84z"/>
    <path fillRule="evenodd" clipRule="evenodd" fill="#57AE47" d="M65.202 70.702l-.67.78c-.183-.391-.375-.714-.491-1.062-2.913-8.731-5.812-17.468-8.728-26.198a6167.476 6167.476 0 00-6.768-20.118c-.105-.314-.327-.588-.496-.879l6.055-7.965c.191.255.463.482.562.769 1.681 4.921 3.347 9.848 5.003 14.778 1.547 4.604 3.071 9.215 4.636 13.813.105.308.47.526.714.786l.012 1.045c.058 8.082.115 16.167.171 24.251z"/>
    <path fillRule="evenodd" clipRule="evenodd" fill="#60B24F" d="M65.021 45.404c-.244-.26-.609-.478-.714-.786-1.565-4.598-3.089-9.209-4.636-13.813-1.656-4.93-3.322-9.856-5.003-14.778-.099-.287-.371-.514-.562-.769 1.969-1.928 3.877-3.925 5.925-5.764 1.821-1.634 3.285-3.386 3.352-5.968.003-.107.059-.214.145-.514l.519 1.306c-.013.661-.072 1.322-.029 1.979.075 1.143.259 2.28.311 3.423.096 2.127.142 4.258.185 6.388.069 3.428.132 6.856.175 10.285.067 5.478.111 10.956.18 16.434.008.861.098 1.718.152 2.577z"/>
    <path fillRule="evenodd" clipRule="evenodd" fill="#A9AA88" d="M62.598 107.085c.263-1.315.609-2.62.772-3.947.325-2.649.548-5.312.814-7.968l.066-.01.066.011a41.402 41.402 0 001.394 9.838c-.176.232-.425.439-.518.701-.727 2.05-1.412 4.116-2.143 6.166-.1.28-.378.498-.574.744l-.747-2.566.87-2.969z"/>
    <path fillRule="evenodd" clipRule="evenodd" fill="#B6B598" d="M62.476 112.621c.196-.246.475-.464.574-.744.731-2.05 1.417-4.115 2.143-6.166.093-.262.341-.469.518-.701l1.255 2.754c-.248.352-.59.669-.728 1.061l-2.404 7.059c-.099.283-.437.483-.663.722l-.695-3.985z"/>
    <path fillRule="evenodd" clipRule="evenodd" fill="#C2C1A7" d="M63.171 116.605c.227-.238.564-.439.663-.722l2.404-7.059c.137-.391.48-.709.728-1.061l1.215 1.037c-.587.58-.913 1.25-.717 2.097l-.369 1.208c-.168.207-.411.387-.494.624-.839 2.403-1.64 4.819-2.485 7.222-.107.305-.404.544-.614.812-.109-1.387-.22-2.771-.331-4.158z"/>
    <path fillRule="evenodd" clipRule="evenodd" fill="#CECDB7" d="M63.503 120.763c.209-.269.506-.508.614-.812.845-2.402 1.646-4.818 2.485-7.222.083-.236.325-.417.494-.624l-.509 5.545c-.136.157-.333.294-.398.477-.575 1.614-1.117 3.24-1.694 4.854-.119.333-.347.627-.525.938-.158-.207-.441-.407-.454-.623-.051-.841-.016-1.688-.013-2.533z"/>
    <path fillRule="evenodd" clipRule="evenodd" fill="#DBDAC7" d="M63.969 123.919c.178-.312.406-.606.525-.938.578-1.613 1.119-3.239 1.694-4.854.065-.183.263-.319.398-.477l.012 3.64-1.218 3.124-1.411-.495z"/>
    <path fillRule="evenodd" clipRule="evenodd" fill="#EBE9DC" d="M65.38 124.415l1.218-3.124.251 3.696-1.469-.572z"/>
    <path fillRule="evenodd" clipRule="evenodd" fill="#CECDB7" d="M67.464 110.898c-.196-.847.129-1.518.717-2.097l.337.23-1.054 1.867z"/>
    <path fillRule="evenodd" clipRule="evenodd" fill="#4FAA41" d="M64.316 95.172l-.066-.011-.066.01.155-.559-.023.56z"/>
  </svg>
);

const SqlIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[20px] h-[20px] md:w-[39.3px] md:h-[39.3px] text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5">
    <ellipse cx="12" cy="7" rx="8" ry="3" />
    <path d="M4 7v10a8 3 0 0 0 16 0V7" strokeLinecap="round" strokeLinejoin="round" />
    <text x="12" y="13.5" textAnchor="middle" fill="currentColor" stroke="none" fontSize="4.5" fontWeight="bold" fontFamily="sans-serif" letterSpacing="0.1">SQL</text>
  </svg>
);

const ReactIcon = () => (
  <svg viewBox="0 0 128 128" className="w-[20px] h-[20px] md:w-[39.3px] md:h-[39.3px] text-[#00D8FF] animate-[spin_15s_linear_infinite]">
    <g fill="currentColor">
      <circle cx="64" cy="64" r="11.4"/>
      <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"/>
    </g>
  </svg>
);

const PythonIcon = () => (
  <svg viewBox="0 0 128 128" className="w-[20px] h-[20px] md:w-[39.3px] md:h-[39.3px]">
    <linearGradient id="python-original-a" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
      <stop offset="0" stopColor="#5A9FD4"/>
      <stop offset="1" stopColor="#306998"/>
    </linearGradient>
    <linearGradient id="python-original-b" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
      <stop offset="0" stopColor="#FFD43B"/>
      <stop offset="1" stopColor="#FFE873"/>
    </linearGradient>
    <path fill="url(#python-original-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" transform="translate(0 10.26)"/>
    <path fill="url(#python-original-b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" transform="translate(0 10.26)"/>
    <radialGradient id="python-original-c" cx="1825.678" cy="444.45" r="26.743" gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stopColor="#B8B8B8" stopOpacity=".498"/>
      <stop offset="1" stopColor="#7F7F7F" stopOpacity="0"/>
    </radialGradient>
    <path opacity=".444" fill="url(#python-original-c)" d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z"/>
  </svg>
);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative h-screen h-[100dvh] min-h-[600px] sm:min-h-[650px] md:min-h-[720px] flex items-center justify-start bg-[#0A0A0A] overflow-hidden py-4 sm:py-8 md:py-0"
    >
      {/* Background office landscape image with blending overlays */}
      <div className="absolute inset-0 w-full h-full z-0 select-none pointer-events-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero-bg.jpg?v=2"
          alt="Aaryan Nighut Background"
          className="absolute w-[123%] sm:w-[109%] md:w-full h-[95%] md:h-[102.5%] object-cover object-[82%_center] md:object-contain md:object-[66%_center] scale-[0.995] translate-x-[14%] sm:translate-x-[4%] md:translate-x-0"
          style={{
            top: "-2%",
            left: "-0.5%",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 95%)",
            maskImage: "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 95%)"
          }}
        />
        {/* Blending overlay to make left side solid black for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/30 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/20 via-transparent to-transparent z-10" />
      </div>

      {/* Content Container (constrained left column using grid to align side-by-side with photo) */}
      <div className="max-w-7xl w-full mx-auto pl-3.5 pr-3 md:px-12 lg:px-16 z-10 relative grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center h-full pt-16 pb-6 md:pt-20 md:pb-8 lg:pt-20 lg:pb-8">
        <div
          className="md:col-span-7 flex flex-col justify-center text-left space-y-6 md:space-y-5 lg:space-y-6 select-none mt-4 md:mt-0 max-h-full"
          style={{ transform: "translateY(-1.5%)" }}
        >
          
          {/* Subtitle 1: Hello */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2"
          >
            <span className="text-[#FFD700] font-bold text-sm">|</span>
            <span className="text-[8px] md:text-xs font-mono tracking-[0.14em] md:tracking-[0.38em] text-gray-400 uppercase font-semibold [word-spacing:0.04em] md:[word-spacing:0.22em]">
              HELLO, I&apos;M
            </span>
          </motion.div>

          {/* Main Giant Name */}
          <div className="space-y-1 !mt-1 sm:!mt-1.5">
            <h1 className="text-[29px] sm:text-6xl md:text-7xl lg:text-7xl xl:text-[5rem] 2xl:text-[6rem] font-black tracking-[0.01em] sm:tracking-[0.03em] uppercase leading-[0.85] sm:leading-[0.85] flex flex-col font-sans">
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                className="text-white"
              >
                Aaryan
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="text-[#FFD700]"
              >
                Nighut
              </motion.span>
            </h1>
          </div>

          {/* Subtitle 2: Role */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-2 font-mono text-[7.5px] md:text-xs tracking-[0.14em] md:tracking-[0.34em] text-white font-semibold [word-spacing:0.04em] md:[word-spacing:0.26em]"
          >
            <span className="text-[#FFD700] font-bold">|</span>
            <span>AI &amp; FULL-STACK DEVELOPER</span>
          </motion.div>

          {/* Narrative description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[10px] md:text-sm text-gray-400 font-light leading-[1.7] md:leading-relaxed max-w-md tracking-[0.02em] md:tracking-[0.05em] [word-spacing:0.02em] md:[word-spacing:0.15em]"
          >
            I build intelligent digital experiences<br />
            that combine innovation, technology,<br />
            and real-world impact.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-2 md:gap-3 items-center pt-3 md:pt-0.5"
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="h-[28px] md:h-auto px-1.5 md:px-4.5 py-0 md:py-2.5 rounded-lg bg-[#FFD700] hover:bg-[#FFD700]/90 text-black font-semibold text-[8px] md:text-[10px] uppercase tracking-[0.14em] flex items-center justify-center gap-0.5 md:gap-1 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer shadow-[0_5px_15px_rgba(255,215,0,0.2)]"
              style={{ wordSpacing: "0.16em" }}
            >
              <span>View projects</span>
              <span className="text-[8px] md:text-xs font-bold">→</span>
            </button>
            <a
              href={profileData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-[28px] md:h-auto px-1.5 md:px-4.5 py-0 md:py-2.5 rounded-lg border border-[#FFD700] hover:bg-[#FFD700]/5 text-white font-semibold text-[8px] md:text-[10px] uppercase tracking-[0.14em] flex items-center justify-center gap-0.5 md:gap-1.5 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer group"
              style={{ wordSpacing: "0.16em" }}
            >
              <span>Download CV</span>
              <Download className="text-[#FFD700] transition-transform duration-300 group-hover:translate-y-0.5 w-3 h-3 md:w-4 md:h-4" />
            </a>
          </motion.div>

          {/* Tech Stack Row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap items-center justify-start gap-y-2.5 gap-x-2 md:gap-[22px] pt-3 md:pt-2 max-w-md w-full"
          >
            {/* Java */}
            <div className="flex flex-col items-center gap-0.5 md:gap-0.5 hover:scale-110 transition-transform cursor-pointer group">
              <JavaIcon />
              <span className="font-mono text-[7px] md:text-[9.5px] uppercase tracking-[0.12em] text-gray-500 group-hover:text-white transition-colors">Java</span>
            </div>

            {/* Node */}
            <div className="flex flex-col items-center gap-0.5 md:gap-0.5 hover:scale-110 transition-transform cursor-pointer group">
              <NodeIcon />
              <span className="font-mono text-[7px] md:text-[9.5px] uppercase tracking-[0.12em] text-gray-500 group-hover:text-white transition-colors">Node.js</span>
            </div>

            {/* Mongo */}
            <div className="flex flex-col items-center gap-0.5 md:gap-0.5 hover:scale-110 transition-transform cursor-pointer group">
              <MongoIcon />
              <span className="font-mono text-[7px] md:text-[9.5px] uppercase tracking-[0.12em] text-gray-500 group-hover:text-white transition-colors">MongoDB</span>
            </div>

            {/* SQL */}
            <div className="flex flex-col items-center gap-0.5 md:gap-0.5 hover:scale-110 transition-transform cursor-pointer group">
              <SqlIcon />
              <span className="font-mono text-[7px] md:text-[9.5px] uppercase tracking-[0.12em] text-gray-500 group-hover:text-white transition-colors">SQL</span>
            </div>

            {/* React */}
            <div className="flex flex-col items-center gap-0.5 md:gap-0.5 hover:scale-110 transition-transform cursor-pointer group">
              <ReactIcon />
              <span className="font-mono text-[7px] md:text-[9.5px] uppercase tracking-[0.12em] text-gray-500 group-hover:text-white transition-colors">React</span>
            </div>

            {/* Python */}
            <div className="flex flex-col items-center gap-0.5 md:gap-0.5 hover:scale-110 transition-transform cursor-pointer group">
              <PythonIcon />
              <span className="font-mono text-[7px] md:text-[9.5px] uppercase tracking-[0.12em] text-gray-500 group-hover:text-white transition-colors">Python</span>
            </div>
          </motion.div>

          {/* Metrics Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="group glass-card w-full max-w-[310px] md:max-w-none py-1.5 md:py-3 px-2 md:px-4 rounded-lg md:rounded-xl border border-white/5 hover:border-white/15 active:border-white/15 bg-[#0C0C0C]/85 hover:bg-[#0E0E0E]/90 active:bg-[#0E0E0E]/90 shadow-[0_15px_35px_rgba(0,0,0,0.5)] flex items-center justify-between text-left gap-1 md:gap-4 transition-all duration-300 cursor-pointer"
          >
            {/* Metric 1 */}
            <div className="flex-1 flex flex-col gap-0.5 items-start pl-0.5 md:pl-2">
              <div className="flex items-center gap-0.5 md:gap-2">
                <span className="text-[10px] md:text-base">🏆</span>
                <span className="text-[10px] md:text-base font-bold text-white font-mono leading-none">1+</span>
              </div>
              <span className="text-[8px] md:text-[10px] text-gray-300 md:text-gray-500 group-hover:text-white group-active:text-white transition-colors duration-300 font-mono uppercase tracking-[0.05em] leading-none" style={{ wordSpacing: "0.06em" }}>
                Hackathon Win
              </span>
            </div>
            <div className="w-[1px] h-3 md:h-6 bg-white/10" />

            {/* Metric 2 */}
            <div className="flex-1 flex flex-col gap-0.5 items-start pl-0.5 md:pl-2">
              <div className="flex items-center gap-0.5 md:gap-2">
                <span className="text-[10px] md:text-base">📁</span>
                <span className="text-[10px] md:text-base font-bold text-white font-mono leading-none">5+</span>
              </div>
              <span className="text-[8px] md:text-[10px] text-gray-300 md:text-gray-500 group-hover:text-white group-active:text-white transition-colors duration-300 font-mono uppercase tracking-[0.05em] leading-none" style={{ wordSpacing: "0.06em" }}>
                Projects
              </span>
            </div>
            <div className="w-[1px] h-3 md:h-6 bg-white/10" />

            {/* Metric 3 */}
            <div className="flex-1 flex flex-col gap-0.5 items-start pl-0.5 md:pl-2">
              <div className="flex items-center gap-0.5 md:gap-2">
                <span className="text-[10px] md:text-base">📜</span>
                <span className="text-[10px] md:text-base font-bold text-white font-mono leading-none">10+</span>
              </div>
              <span className="text-[8px] md:text-[10px] text-gray-300 md:text-gray-500 group-hover:text-white group-active:text-white transition-colors duration-300 font-mono uppercase tracking-[0.05em] leading-none" style={{ wordSpacing: "0.06em" }}>
                Certificates
              </span>
            </div>
            <div className="w-[1px] h-3 md:h-6 bg-white/10" />

            {/* Metric 4 */}
            <div className="flex-1 flex flex-col gap-0.5 items-start pl-0.5 md:pl-2">
              <div className="flex items-center gap-0.5 md:gap-2">
                <span className="text-[10px] md:text-base">🧠</span>
                <span className="text-[10px] md:text-base font-bold text-white font-mono leading-none">AI/ML</span>
              </div>
              <span className="text-[8px] md:text-[10px] text-gray-300 md:text-gray-500 group-hover:text-white group-active:text-white transition-colors duration-300 font-mono uppercase tracking-[0.05em] leading-none" style={{ wordSpacing: "0.06em" }}>
                <span className="hidden md:inline">AIML </span>Enthusiast
              </span>
            </div>
          </motion.div>

          {/* Status Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex items-center gap-2 mt-1 sm:mt-2 pl-1 select-none group cursor-pointer"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
            <span className="font-mono text-[8.5px] md:text-[11px] uppercase tracking-[0.18em] md:tracking-[0.34em] text-gray-400 group-hover:text-white group-active:text-white transition-colors duration-300 font-bold [word-spacing:0.12em] md:[word-spacing:0.28em]">
              AVAILABLE FOR OPPORTUNITIES
            </span>
          </motion.div>

        </div>

        {/* Right side spacer for background image alignment */}
        <div className="md:col-span-5 hidden md:block" />
      </div>
    </section>
  );
}
