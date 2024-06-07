import FormElementsSidebar from "./FormElementsSidebar";
import PropertiesFormSidebar from "./PropertiesFormSidebar";
import useDesigner from "./hooks/useDesigner";

export default function DesignerSidebar() {
  const { selectedElement } = useDesigner();
  return (
    <div className="w-[400px]  flex flex-col flex-grow gap-2 border-l-2 border-muted p-4 bg-background overflow-y-auto h-full">
      {!selectedElement && <FormElementsSidebar />}
      {selectedElement && <PropertiesFormSidebar />}
    </div>
  );
}
