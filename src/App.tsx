import Key from './app/Key';
import ReactLazyLoadImageComponent from './app/lazy-loading/react-lazy-load-image-component';
import React18 from './app/React18';
import Test from './app/Test';

function App() {
  // const queryClient = new QueryClient();
  //   const [valueA, setValueA] = useState(0);
  //   const [valueB, setValueB] = useState(0);
  //   useEffect(() => {
  //     console.log('render');
  //   });
  //   useEffect(() => {
  //     console.log('change value a', valueA);
  //   }, [valueA]);
  //   useEffect(() => {
  //     console.log('change value b', valueB);
  //   }, [valueB]);
  //   return (
  //     <div className="flex flex-col justify-center items-center min-h-screen">
  //       a: {valueA}
  //       <br />
  //       b: {valueB}
  //       <br />
  //       <button
  //         onClick={() => {
  //           console.log('start');
  //           setValueA(1);
  //           setValueB(1);
  //           setValueA(2);
  //           setValueB(2);
  //           console.log('end');
  //         }}
  //       >
  //         click
  //       </button>
  //     </div>
  //   );
  // return <RxJs />;
  // return <Debounce />;
  // return (
  //   <Provider store={store}>
  //     <Counter />;
  //   </Provider>
  // );
  // return <Resizer />;
  // return <JSONViewer />;
  // return <SetFocus />;
  // return <Timer />;
  // return (
  //   <BrowserRouter>
  //     <PathQueryViewer />
  //   </BrowserRouter>
  // );
  // return <Render17and18versionTest />;
  // const About = React.lazy(() => import('./app/CodeSplitting/About'));
  // const Home = React.lazy(() => import('./app/CodeSplitting/Home'));
  // return (
  //   <BrowserRouter>
  //     <React.Suspense fallback={<p>Loading page...</p>}>
  //       <nav>
  //         <ul>
  //           <li>
  //             <Link to="/about">About</Link>
  //           </li>
  //           <li>
  //             <Link to="/home">Home</Link>
  //           </li>
  //         </ul>
  //       </nav>
  //       <Route path="/about">
  //         <About />
  //       </Route>
  //       <Route path="/home">
  //         <Home />
  //       </Route>
  //     </React.Suspense>
  //   </BrowserRouter>
  // );
  // return (
  //   <QueryClientProvider client={queryClient}>
  //     <ReactQuery />
  //   </QueryClientProvider>
  // );
  // return <UseMemoAndCallback />;
  // return <UploadFile />;
  // return <CustomFilePicker />;
  // return <ErrorBoundaries />;
  // return <Key />;
  // return <MobX />;
  // return <Test />;
  // return <React18 />;
  return <ReactLazyLoadImageComponent />;
}

export default App;
