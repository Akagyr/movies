import { Rating } from './Rating';

export default function RatingWithText({
  rating = 0,
  readOnly = true,
  maxWidth = 90,
}: {
  rating: number;
  readOnly?: boolean;
  maxWidth?: number;
}) {
  return (
    <div className='flex items-center'>
      <Rating rating={rating} readOnly={readOnly} maxWidth={maxWidth} />
      <p className='ms-[5px] text-xs lg:text-sm font-medium text-gray-400'>{rating} из 10</p>
    </div>
  );
}
