import crypto from 'crypto';

export type Block = {
  index: number;
  timestamp: string;
  transactions: any[];
  previous_hash: string;
  current_hash: string;
};

// ✍️ TODO: Viết hàm tại đây
export function isValidBlock(block: Block): boolean {
  // Lấy ra các thuộc tính hiện tại của block
  const { index, timestamp, transactions, previous_hash } = block;
  const value = index + timestamp + JSON.stringify(transactions) + previous_hash;

  // Lấy ra chuỗi băm của block
  const tmp_hash = crypto.createHash('sha256').update(value).digest('hex');
  

  // So sánh với current_hash
  return tmp_hash === block.current_hash;
}
