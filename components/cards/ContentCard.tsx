interface Props {
  title: string;
  description: string;
  action: string;
}

export default function ContentCard({ title, description, action }: Props) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-md transition">
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
        {description}
      </p>
      <button className="text-sm font-medium text-blue-600 hover:underline">
        {action}
      </button>
    </div>
  );
}