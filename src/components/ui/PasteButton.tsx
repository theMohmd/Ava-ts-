//button to paste from clipboard
import { ClipboardIcon } from "./Icons";

const PasteButton = ({
    setString,
}: {
    setString: React.Dispatch<React.SetStateAction<string>>;
}) => {
    const pasteFromClipboard = async () => {
        try {
            const clipboardText = await navigator.clipboard.readText();
            setString(clipboardText);
        } catch (error) {
            console.error("Failed to read clipboard contents: ", error);
        }
    };
    return (
        <button
            onClick={pasteFromClipboard}
            title="جایگذاری"
            className="mr-1 text-gray-400 hover:text-cgreen"
        >
            <ClipboardIcon />
        </button>
    );
};

export default PasteButton;
