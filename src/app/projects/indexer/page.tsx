import emailStructure from './images/email-structure.png';

export default function Indexer() {
  return (
    <>
      <h1 className="text-4xl font-bold">Indexer</h1>

      <p>
        This is a project I made for a selection process I applied in a startup.
      </p>

      <p>
        The main idea was to develop a cli tool in Go for indexing emails in a
        text fomat in the search engine <a className="underline hover:text-[#FF6B45]"
          href="https://zincsearch-docs.zinc.dev/"> ZincSearch</a>.
      </p>

      <p>
        I also built a web client using Vue.js to visualize the emails
      </p>

      <p>
        In the end I didn't get the job, but, it was a lot of fun to develop
        this project and it was also the first time I developed something from
        scratch using Go, so it was worth it.
      </p>
    </>
  );
}
