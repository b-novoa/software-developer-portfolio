
import ArchitectureNode from '../ui/ArchitectureNode'

function ArchitecturePanel() {
    return (
        <div className="overflow-hidden rounded-2xl border border-slate-700 bg-[#111C2A] shadow-2xl shadow-emerald-950/20">

            {/* Barra superior del editor */}
            <div className="flex items-center justify-between border-b border-slate-700 px-5 py-4">
                <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>

                <span className="font-mono text-xs text-slate-400">
                    Application.java
                </span>
            </div>

            {/* Código Java de ejemplo */}
            <div className="overflow-x-auto px-5 py-6">
                <pre className="font-mono text-xs leading-7 text-slate-300 sm:text-sm">
                    <code>{`@SpringBootApplication
public class Application {

  public static void main(String[] args) {
    SpringApplication.run(
      Application.class, args
    );
  }
}`}</code>
                </pre>
            </div>

            {/* Diagrama de arquitectura */}
            <div className="border-t border-slate-700 p-5">
                <p className="mb-5 text-xs font-semibold tracking-widest text-[#A2FFCB]">
                    ARCHITECTURE OVERVIEW
                </p>

                <div className="mx-auto max-w-xs space-y-3">
                    <ArchitectureNode
                        title="REST API"
                        description="Spring Boot"
                        highlighted
                    />

                    <div className="text-center text-[#A2FFCB]">
                        ↓
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <ArchitectureNode
                            title="Services"
                            description="Business logic"
                        />

                        <ArchitectureNode
                            title="Database"
                            description="PostgreSQL"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArchitecturePanel
