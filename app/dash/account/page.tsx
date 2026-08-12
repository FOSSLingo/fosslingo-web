import { Sidebar } from "@/src/components/ui/sidebar";

export default function Account() {
  var quotes = // * Look, I got bored, ok?
    [
      "Bold of you to assume that I have implemented account functionality.", 
      "Does this app even need an account function? What's the point?", 
      "I'm too tired to add accounts, get me a coffee and I will.",
      "Sorry, I ran out of Claude credits, accounts are now postponed. /j",
      "Fork this repo and add accounts yourself!!",
      "Hashing? What's that? I store credentials in plain JSON."
    ]
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="flex">
      <Sidebar highlitedIcon="account"/>
      <main className="flex flex-col flex-1">
        <div className="flex flex-row justify-center py-10 lg:py-20 xl:py-20">
          <h1 className="font-bold text-4xl">Account</h1>
        </div>
        <hr className='border-neutral-800'/>
        <div className="flex-1 flex justify-center items-center">
          <h1 className="text-center font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl px-4">
            {randomQuote}
          </h1>
        </div>
      </main>
    </div>
  )
}