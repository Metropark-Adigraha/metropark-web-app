export interface ImageData {
    id: string;
    url: string;
    width: number;
    height: number;
    author: string;
    displaySize: 'small' | 'medium' | 'large';
  }
  
  function getRandomSize(): 'small' | 'medium' | 'large' {
    const sizes = ['small', 'medium', 'large'];
    return sizes[Math.floor(Math.random() * sizes.length)] as 'small' | 'medium' | 'large';
  }
  
  export async function fetchImageData(count: number): Promise<ImageData[]> {
    const response = await fetch(`https://picsum.photos/v2/list?limit=${count}`);
    const data = await response.json();
    
    return data.map((item: any) => ({
      id: item.id,
      url: item.download_url,
      width: item.width,
      height: item.height,
      author: item.author,
      displaySize: getRandomSize(),
    }));
  }
  
  