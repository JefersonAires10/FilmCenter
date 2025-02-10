import * as S from './style';

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    LineChart,
    Line,
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
} from 'recharts';

const gastosMensaisData = [
    { mes: 'Jan', valor: 120 },
    { mes: 'Fev', valor: 150 },
    { mes: 'Mar', valor: 130 },
    { mes: 'Abr', valor: 160 },
    { mes: 'Mai', valor: 140 },
    { mes: 'Jun', valor: 170 },
    { mes: 'Jul', valor: 180 },
    { mes: 'Ago', valor: 190 },
    { mes: 'Set', valor: 160 },
    { mes: 'Out', valor: 150 },
    { mes: 'Nov', valor: 140 },
    { mes: 'Dez', valor: 200 },
];

const filmesPorAnoData = [
    { ano: 2018, quantidade: 80 },
    { ano: 2019, quantidade: 120 },
    { ano: 2020, quantidade: 150 },
    { ano: 2021, quantidade: 130 },
    { ano: 2022, quantidade: 160 },
    { ano: 2023, quantidade: 140 },
];

const generoPreferidoData = [
    { nome: 'Ação', valor: 30 },
    { nome: 'Comédia', valor: 25 },
    { nome: 'Drama', valor: 20 },
    { nome: 'Suspense', valor: 15 },
    { nome: 'Romance', valor: 10 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const streamingPreferidoData = [
    { nome: 'Netflix', valor: 40 },
    { nome: 'Amazon Prime', valor: 30 },
    { nome: 'Disney+', valor: 20 },
    { nome: 'Outros', valor: 10 },
];

const Dashboard = () => {
    return (
        <S.DashboardContainer>
            <S.Title>Dashboard de Streaming</S.Title>

            <S.ChartContainer>
                <S.SingleChartContainer>
                    <h3>Gastos Mensais com Streaming</h3>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={gastosMensaisData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                            <XAxis dataKey="mes" tick={{ fill: '#fff' }} />
                            <YAxis tick={{ fill: '#fff' }} />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="valor" fill="#8884d8" />
                        </BarChart>
                    </ResponsiveContainer>
                </S.SingleChartContainer>

                <S.SingleChartContainer>
                    <h3 style={{ color: '#fff', fontSize: '22px', marginBottom: '15px' }}>Filmes Assistidos por Ano</h3>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={filmesPorAnoData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                            <XAxis dataKey="ano" tick={{ fill: '#fff' }} />
                            <YAxis tick={{ fill: '#fff' }} />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="quantidade" stroke="#82ca9d" strokeWidth={3} />
                        </LineChart>
                    </ResponsiveContainer>
                </S.SingleChartContainer>
            </S.ChartContainer>

            <S.ChartContainer>
                <S.StreamingChartContainer>
                    <h3 style={{ color: '#fff', fontSize: '22px', marginBottom: '15px' }}>Plataforma de Streaming Preferida</h3>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={streamingPreferidoData}
                                dataKey="valor"
                                nameKey="nome"
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                fill="#8884d8"
                                label
                            >
                                {streamingPreferidoData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </S.StreamingChartContainer>

                <S.PieChartContainer>
                    <h3 style={{ color: '#fff', fontSize: '22px', marginBottom: '15px' }}>Gênero Preferido</h3>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={generoPreferidoData}
                                dataKey="valor"
                                nameKey="nome"
                                cx="50%"
                                cy="50%"
                                outerRadius={150}
                                fill="#8884d8"
                                label
                            >
                                {generoPreferidoData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </S.PieChartContainer>
            </S.ChartContainer>
        </S.DashboardContainer>
    );
};

export default Dashboard;
