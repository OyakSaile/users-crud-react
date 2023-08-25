interface DashboardContextProps {
  title: string
  children: React.ReactNode
}
export const DashboardContent: React.FC<DashboardContextProps> = ({
  children,
  title,
}) => {
  return (
    <div className="p-5 flex-1">
      <h2 className="text-3xl font-bold text-indigo-500">{title}</h2>
      <div>{children}</div>
    </div>
  )
}