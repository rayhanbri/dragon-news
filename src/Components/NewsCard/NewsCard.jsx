import React from 'react';
import { FaBookmark, FaEye, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const NewsCard = ({ news}) => {
  const {
    id,
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
    tags,
  } = news;

  return (
    <div className="card bg-base-100 shadow-md border ">
      <figure>
        <img src={thumbnail_url} alt="News Thumbnail" className="w-full h-56 object-cover" />
      </figure>
      <div className="card-body">
        {/* Author Info */}
        <div className="flex justify-between items-center bg-base-200  mb-4 !p-0  w-full">
          
          <div  className='flex gap-4 '>
            <div>
            <img src={author.img} alt={author.name} className="w-10 h-10 rounded-full" />
            </div>
           <div>
           <h2 className="font-semibold">{author.name}</h2>
           <p className="text-sm text-gray-500">{new Date(author.published_date).toDateString()}</p>
           </div>
          </div>
          <div className='flex gap-4'>
          <FaBookmark size={30} />
          <FaShareAlt size={30}/>
          </div>
        </div>
        

        {/* Title */}
        <h2 className="card-title text-lg">{title}</h2>

        {/* Details */}
        <p className="text-sm text-gray-700">
          {details.length > 200 ? `${details.slice(0, 200)}...` : details}
        </p>
        <Link to={`/news-details/${id}`} className="text-orange-600 font-semibold mt-2 cursor-pointer">Read More</Link>

        {/* Footer: Rating & Views */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-1 text-orange-500">
            <FaStar />
            <span>{rating.number}</span>
            {rating.badge && (
              <span className="badge badge-warning text-xs ml-2 capitalize">{rating.badge}</span>
            )}
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
