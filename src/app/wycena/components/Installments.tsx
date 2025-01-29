export const Installments = () => (
  <section className="mb-16">
    <div className="max-w-3xl mx-auto px-2 md:px-4">
      <div className="bg-white p-4 md:p-10 rounded-lg shadow-sm">
        <h2 className="text-xl md:text-2xl font-medium text-gray-900 mb-4 md:mb-8 text-center">
          Za duża kwota na raz? Spokojnie, możliwe są raty.
          <br />
          (Na przykładzie oferty specjalnej)
        </h2>
        
        <div className="space-y-4 md:space-y-8 text-left">
          <div className="border-l-3 border-blue-500 pl-3 md:pl-6 py-2">
            <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-1 md:mb-2">1 rata</h3>
            <p className="text-base md:text-lg text-gray-600">[17999zł] - płatne z góry.</p>
          </div>

          <div className="border-l-3 border-blue-500 pl-3 md:pl-6 py-2">
            <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-1 md:mb-2">2 raty (najpopularniejsze)</h3>
            <p className="text-base md:text-lg text-gray-600 whitespace-pre-line">
              [8999,50zł] - płatne z góry,
              <br />
              [8999,50zł] - płatne po zleceniu.
            </p>
          </div>

          <div className="border-l-3 border-blue-500 pl-3 md:pl-6 py-2">
            <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-1 md:mb-2">4 raty</h3>
            <p className="text-base md:text-lg text-gray-600 whitespace-pre-line">
              [4499,75zł] - płatne z góry,
              <br />
              [4499,75zł], [4499,75zł], [4499,75zł] - płatne po zleceniu.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);