const Navbar = () => {
    return ( 
        <>
      <nav className="fixed top-0 left-0 right-0 flex justify-between items-center py-4 px-8 bg-purple-500 z-10">
      <div className="text-white font-bold text-2xl">CarLane</div>
      <ul className="flex space-x-4 text-white text-xl font-medium">
        <li className="hover:bg-purple-600 px-4 py-2 rounded">Home</li>
        <li className="hover:bg-purple-600 px-4 py-2 rounded">Cars</li>
        <li className="hover:bg-purple-600 px-4 py-2 rounded">Services</li>
      </ul>
    </nav>
    </>
     
     );
}
 
export default Navbar;