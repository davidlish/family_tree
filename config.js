// 部署前请填写下面的 Supabase 信息（免费注册：https://supabase.com）
window.APP_CONFIG = {
  supabaseUrl: "https://mscfdvyzemqochqnjvze.supabase.co",          // 例如 "https://abcdefgh.supabase.co"
  supabaseAnonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zY2Zkdnl6ZW1xb2NocW5qdnplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAxMDk1ODAsImV4cCI6MjEwNTY4NTU4MH0.y6CvtxdQ8C1A_AMVGZKIchDuu7Zqlxfv3joV2f14HwQ",      // 例如 "eyJhbGciOiJIUzI1NiIs..."
  bucket: "photos",         // 照片存储桶名，照 schema.sql 创建后无需修改
  treeId: "main",           // 族谱数据在数据库里的 id，无需修改
  editPassword: "12345678"          // 可选：编辑密码；留空则任何打开网页的人都能编辑
};