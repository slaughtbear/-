function Album({ name, title, year }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Artista
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Disco
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Año
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          <tr>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              {name}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              {title}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
              {year}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Album;
