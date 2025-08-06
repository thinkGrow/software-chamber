export default function FontTest() {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold mb-8">Font Utility Test</h1>
      
      <div className="grid gap-4">
        <div className="border p-4 rounded">
          <h3 className="text-sm font-semibold text-gray-600 mb-2">Tailwind Utilities:</h3>
          <p className="font-primary text-xl">font-primary: Bricolage Grotesque</p>
          <p className="font-dmsans text-xl">font-dmsans: DM Sans</p>
          <p className="font-inter text-xl">font-inter: Inter</p>
          <p className="font-secondary text-xl">font-secondary: Outfit</p>
          <p className="font-rubik text-xl">font-rubik: Rubik</p>
          <p className="font-poppins text-xl">font-poppins: Poppins</p>
        </div>
        
        <div className="border p-4 rounded">
          <h3 className="text-sm font-semibold text-gray-600 mb-2">Inline Styles (for comparison):</h3>
          <p style={{fontFamily: '"Bricolage Grotesque", sans-serif'}} className="text-xl">Inline: Bricolage Grotesque</p>
          <p style={{fontFamily: '"DM Sans", sans-serif'}} className="text-xl">Inline: DM Sans</p>
          <p style={{fontFamily: '"Inter", sans-serif'}} className="text-xl">Inline: Inter</p>
          <p style={{fontFamily: '"Outfit", sans-serif'}} className="text-xl">Inline: Outfit</p>
          <p style={{fontFamily: '"Rubik", sans-serif'}} className="text-xl">Inline: Rubik</p>
          <p style={{fontFamily: '"Poppins", sans-serif'}} className="text-xl">Inline: Poppins</p>
        </div>
        
        <div className="border p-4 rounded">
          <h3 className="text-sm font-semibold text-gray-600 mb-2">Default (should be Outfit):</h3>
          <p className="text-xl">No font class applied - using global default</p>
        </div>
      </div>
    </div>
  )
}