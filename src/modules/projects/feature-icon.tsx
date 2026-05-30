import {
  RefreshCw01, LayoutAlt01, MessageSquare01,
  Bell01, File01, BarChart01, CreditCard01,
   Database01, Zap, Globe01, Package, Users01,
  Shield01, Map01, Star01, Dataflow01, LayersThree01,
  ClipboardCheck, Mail01, ChevronRight,
  Calendar
} from "@untitled-ui/icons-react";
import { Bot } from "lucide-react";

function FeatureIcon({ feature }: { feature: string }) {
  const f = feature.toLowerCase();
  const cls = "w-3.5 h-3.5 text-violet-400";

  if (f.includes("payment") || f.includes("credit") || f.includes("stripe") || f.includes("billing"))
    return <CreditCard01 className={cls} />;
  if (f.includes("chat") || f.includes("message") || f.includes("messaging"))
    return <MessageSquare01 className={cls} />;
  if (f.includes("notif"))
    return <Bell01 className={cls} />;
  if (f.includes("report") || f.includes("analytics"))
    return <BarChart01 className={cls} />;
  if (f.includes("calendar") || f.includes("appointment") || f.includes("booking") || f.includes("schedule"))
    return <Calendar className={cls} />;
  if (f.includes("ai") || f.includes("chatbot") || f.includes("model") || f.includes("llm") || f.includes("gpt") || f.includes("claude"))
    return <Bot className={cls} />;
  if (f.includes("workflow") || f.includes("canvas") || f.includes("node") || f.includes("flow"))
    return <Dataflow01 className={cls} />;
  if (f.includes("api") || f.includes("endpoint"))
    return <Zap className={cls} />;
  if (f.includes("database") || f.includes("dynamo") || f.includes("table") || f.includes("storage"))
    return <Database01 className={cls} />;
  if (f.includes("auth") || f.includes("oauth") || f.includes("encrypt") || f.includes("security") || f.includes("audit"))
    return <Shield01 className={cls} />;
  if (f.includes("map") || f.includes("location") || f.includes("tour"))
    return <Map01 className={cls} />;
  if (f.includes("inventory") || f.includes("stock") || f.includes("supply"))
    return <Package className={cls} />;
  if (f.includes("profile") || f.includes("user") || f.includes("patient") || f.includes("staff"))
    return <Users01 className={cls} />;
  if (f.includes("track") || f.includes("progress") || f.includes("monitor"))
    return <ClipboardCheck className={cls} />;
  if (f.includes("certificate") || f.includes("training"))
    return <Star01 className={cls} />;
  if (f.includes("document") || f.includes("file") || f.includes("ticket"))
    return <File01 className={cls} />;
  if (f.includes("dashboard"))
    return <LayoutAlt01 className={cls} />;
  if (f.includes("follow") || f.includes("post") || f.includes("skill"))
    return <Globe01 className={cls} />;
  if (f.includes("async") || f.includes("queue") || f.includes("job") || f.includes("celery"))
    return <RefreshCw01 className={cls} />;
  if (f.includes("layer") || f.includes("microservice") || f.includes("architect"))
    return <LayersThree01 className={cls} />;

  return <ChevronRight className={cls} />;
}

export default FeatureIcon