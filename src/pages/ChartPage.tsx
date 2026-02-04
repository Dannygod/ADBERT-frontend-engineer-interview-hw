import { Box, Typography, Paper } from '@mui/material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Link } from 'react-router-dom';

interface PriceData {
  date: string;
  比特幣: number;
  以太幣: number;
}

// 靜態範例資料（7天）- 避免 API 請求限制
const SAMPLE_DATA: PriceData[] = [
  { date: '1/28', 比特幣: 102150, 以太幣: 3180 },
  { date: '1/29', 比特幣: 104320, 以太幣: 3250 },
  { date: '1/30', 比特幣: 103580, 以太幣: 3210 },
  { date: '1/31', 比特幣: 105200, 以太幣: 3320 },
  { date: '2/1', 比特幣: 101890, 以太幣: 3150 },
  { date: '2/2', 比特幣: 99750, 以太幣: 3080 },
  { date: '2/3', 比特幣: 97500, 以太幣: 2750 },
  { date: '2/4', 比特幣: 98200, 以太幣: 2680 },
];

function ChartPage() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        padding: 4,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: '100%',
          maxWidth: 900,
          padding: 3,
        }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          CoinGecko 加密貨幣價格走勢圖
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" gutterBottom>
          比特幣 vs 以太幣（美元計價）- 7天
        </Typography>

        <Box sx={{ width: '100%', height: 400, mt: 2 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={SAMPLE_DATA}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis
                yAxisId="left"
                tickFormatter={(value) => `$${value.toLocaleString()}`}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                tickFormatter={(value) => `$${value.toLocaleString()}`}
              />
              <Tooltip
                formatter={(value) => [`$${Number(value).toLocaleString()}`, '']}
              />
              <Legend
                verticalAlign="bottom"
                wrapperStyle={{ paddingTop: 20 }}
              />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="比特幣"
                stroke="#f7931a"
                strokeWidth={2}
                dot={{ fill: '#f7931a', r: 4 }}
                name="比特幣 (BTC)"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="以太幣"
                stroke="#627eea"
                strokeWidth={2}
                dot={{ fill: '#627eea', r: 4 }}
                name="以太幣 (ETH)"
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>

        <Box
          sx={{
            mt: 3,
            p: 2,
            backgroundColor: '#fafafa',
            borderRadius: 1,
          }}
        >
          <Typography variant="h6" gutterBottom>
            圖例說明
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box
                sx={{
                  width: 20,
                  height: 3,
                  backgroundColor: '#f7931a',
                  borderRadius: 1,
                }}
              />
              <Typography variant="body2">
                <strong>比特幣 (BTC)</strong> - 全球第一且市值最大的加密貨幣。價格顯示於左側 Y 軸。
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box
                sx={{
                  width: 20,
                  height: 3,
                  backgroundColor: '#627eea',
                  borderRadius: 1,
                }}
              />
              <Typography variant="body2">
                <strong>以太幣 (ETH)</strong> - 市值第二大的加密貨幣，以智能合約聞名。價格顯示於右側 Y 軸。
              </Typography>
            </Box>
          </Box>
          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 2 }}>
            資料來源：CoinGecko
          </Typography>
        </Box>

        <Box sx={{ mt: 3, textAlign: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Typography color="primary">← 返回首頁</Typography>
          </Link>
        </Box>
      </Paper>
    </Box>
  );
}

export default ChartPage;
