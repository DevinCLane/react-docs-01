import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex w-full flex-col items-center justify-center space-y-4">
        <h1>Hello world</h1>
        <MyButton />
        <MyButton />
      </div>
    </main>
  )
}

function MyButton() {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Button
    </button>
  )

}