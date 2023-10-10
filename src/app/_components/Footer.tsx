export default function Footer() {
    return (
        <footer className="flex w-full flex-row flex-wrap items-center justify-center text-center gap-y-6 gap-x-10 py-12">
            <div>Made by Devin Lane</div>
            <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                <li>
                    <a
                        href="https://github.com/DevinCLane/react-docs-01"
                        target="_blank"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                        GitHub
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.devinlane.com/"
                        target="_blank"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                        Website
                    </a>
                </li>
            </ul>
        </footer>
    );
}
