import { FaStar, FaEye, FaBookmark, FaShareAlt } from 'react-icons/fa';

const NewsCard = ({ singleNews }) => {
  const { title, rating, total_view, author, thumbnail_url, details, } =
    singleNews;

  return (
    <div className="card bg-base-100 rounded-md border-2 border-base-200 mb-4">
      {/* Header */}
      <div className="flex items-center gap-3 p-4 bg-base-200">
        <img
          src={author.img}
          alt={author.name}
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1">
          <h4 className="font-semibold">{author.name}</h4>
          <p className="text-sm text-gray-500">
            {new Date(author.published_date).toLocaleDateString()}
          </p>
        </div>
        <div className="flex gap-3 text-gray-500">
          <FaBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Image */}

      {/* Body */}
      <div className="card-body">
        <h2 className="card-title text-lg">{title}</h2>
        {/* Image */}
        <figure>
          <img
            src={thumbnail_url}
            alt={title}
            className="w-full h-56 object-cover rounded-md"
          />
        </figure>
        <p className="text-sm text-gray-600">
          {details.length > 150 ? details.slice(0, 150) + '...' : details}
          <span className=" text-orange-500 font-medium cursor-pointer ml-1">
            Read More
          </span>
        </p>
        <p className='border-b border-base-300'></p>
        {/* Footer */}
        <div className="flex items-center justify-between mt-4">
          {/* Rating */}
          <div className="flex items-center gap-1 text-orange-500">
            {[...Array(rating.number)].map((_, i) => (
              <FaStar key={i} />
            ))}
            <span className="ml-2 text-gray-700">{rating.number}.0</span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-2 text-gray-600">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
