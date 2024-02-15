import Image from 'next/image';

import svgIcon from '../../../public/DownArrow.svg';

export function DownArrow() {
  return (
    <div>
      <Image src={svgIcon} alt="svgIcon" width={24} height={24} />
    </div>
  );
}
